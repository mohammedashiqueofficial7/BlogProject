import { useRef, useState } from "react";
import "../Assets/Styles/ChatAi.css";
import { GoogleGenAI, FunctionCallingConfigMode } from "@google/genai";
import { SendHorizontal } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

function ChatAi() {
  const textref = useRef(null);
  const [msgHistory, setMsgHistory] = useState([]);
  const createBlog = (title, description, category) => {
    axios
      .get("http://localhost:3000/blogmodel/image", { responseType: "blob" })
      .then((res) => {
        console.log(res.data);

        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("category", category);
        formdata.append("image", res.data, "blogimage.jpg");
        axios
          .post("http://localhost:3000/blogmodel/uploadblog", formdata, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            alert("Blog Created Successfully");
          })

          .then(() => {
            toast.success("Upload completed");
          });
      });
  };

  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async function sendmsg(msg) {
    const createBlogDeclaration = {
      name: "createBlog",
      parametersJsonSchema: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          category: {
            type: "string",
            description:
              "category of blog, comma separated if multiple. choose from Car,Blogs,Nature,Vehicles,Animals",
          },
        },
        required: ["title", "description", "category"],
      },
    };
    setMsgHistory((prev) => [...prev, { role: "user", text: msg }]);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: msgHistory
        .map((m) => ({ role: m.role, text: m.text }))
        .concat({ role: "user", text: msg }),

      config: {
        systemInstruction:
          "You are a helpful assistant.You need to reply like a friendly modern language. You should only perform function calls IF AND ONLY IF the user explicitly request to create a blog. Otherwise, you should act as a chatbot, helpful and friendly, AND RESPOND IN NATURAL LANGUAGE. You MUST not do function calls in other cases. For example - if the user says `hi`, you should respond with a friendly `hi` message, and NOT do a function call.",
        // toolConfig: {
        //   functionCallingConfig: {

        //     mode: FunctionCallingConfigMode.ANY,
        //     allowedFunctionNames: ["createBlog"],
        //   },
        // },
        tools: [{ functionDeclarations: [createBlogDeclaration] }],
      },
    });
    console.log(response.text);
    console.log(response.functionCalls);

    if (response.functionCalls && response.functionCalls.length > 0) {
      const functionCall = response.functionCalls[0];
      if (functionCall.name === "createBlog") {
        const args = functionCall.args;
        createBlog(args.title, args.description, args.category);
      }
    }

    // setMsgHistory((prev) => [...prev, {user: msg, ai: ""}]);
    // setTimeout(() => {
    setMsgHistory((prev) => {
      const newMsg = [...prev];
      if (!response.text) {
        if (response.functionCalls && response.functionCalls.length > 0) {
          newMsg.push({
            role: "assistant",
            text: `Function called: ${
              response.functionCalls[0].name
            } with parameters ${JSON.stringify(
              response.functionCalls[0].args
            )}`,
          });
        } else {
          newMsg.push({ role: "assistant", text: "No response from AI." });
        }
      } else {
        newMsg.push({ role: "assistant", text: response.text });
      }
      return newMsg;
    });
    // }, 2000);
  }
  const handlesend = () => {
    const msg = textref.current.value;
    if (msg.trim() === "") {
      // alert("Please enter a message.");
      return;
    }
    sendmsg(msg);
    textref.current.value = ""; // Clear the input field after sending
  };

  return (
    <div className="ai-main">
      <div>
        <h1 className="ai-heading">Chat with AI</h1>
        <p className="ai-quote">
          Welcome to the Chat AI page. Here you can interact with our AI-powered
          chat system.
        </p>
        <p className="ai-quote1">
          Feel free to ask questions, seek assistance, or just have a friendly
          chat with our AI. Enjoy your experience!
        </p>
      </div>
      <div className="d-flex">
        <div className="chat-container ai-chat">
          <div className="chat-box" id="chat-box ">
            <div className="chat-message">
              {msgHistory.map((msg, index) => (
                <div key={index}>
                  {msg.role === "user" ? (
                    <p className="person-msg text-end">{msg.text}</p>
                  ) : (
                    <p className="ai-message w-75">{msg.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div class="form-floating mb-3 position-relative" id="input-area">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Type your message..."
              ref={textref}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlesend();
                }
              }}
            />
            <label for="floatingInput">Type your message...</label>
            <button
              type="button"
              style={{ position: "absolute", right: "1%", top: "7%" }}
              id="ai-but"
              onClick={handlesend}
            >
              Send
              <SendHorizontal />
            </button>
          </div>
          <h5 className="ai-bottom">
            Note : AI can make mistakes. Please verify information from reliable
            sources.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ChatAi;
