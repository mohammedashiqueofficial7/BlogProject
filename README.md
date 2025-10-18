# Blog Application

A full-stack blog platform built with React.js for the frontend and Node.js for the backend. This application allows users to create, read, update, and delete blog posts, manage user profiles, interact with AI-powered features, and provides administrative controls for content moderation.

## Features

### User Features
- **User Registration and Authentication**: Secure user signup and login functionality
- **Profile Management**: View and update user profiles, change passwords, and delete accounts
- **Blog Creation and Management**: Upload blogs with images, categories, and descriptions
- **Blog Interaction**: Read blogs, add to favourites, rate blogs, and leave comments
- **AI-Powered Chat**: Interact with an AI assistant for blog creation and content generation
- **Favourites**: Save and manage favourite blog posts
- **Contact Support**: Contact form for user support

### Administrative Features
- **Admin Dashboard**: Overview of platform statistics and user management
- **User Management**: View, manage, and delete user accounts
- **Blog Verification**: Approve or reject blog submissions
- **Content Moderation**: Manage comments, reviews, and reports
- **Reports and Analytics**: View platform usage statistics and reports

### Technical Features
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Real-time Notifications**: Toast notifications for user feedback
- **Image Generation**: AI-powered image generation for blog posts
- **Multi-select Categories**: Advanced category selection for blogs
- **Rating System**: User rating system for blog posts

## Tech Stack

### Frontend
- **React.js**: Modern JavaScript library for building user interfaces
- **React Router**: Declarative routing for React applications
- **Bootstrap**: CSS framework for responsive design
- **Axios**: HTTP client for API requests
- **Sonner**: Toast notification library
- **Recharts**: Chart library for data visualization
- **Lucide React**: Icon library
- **Google Generative AI**: AI integration for chat and image generation

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **JWT**: JSON Web Tokens for authentication
- **Multer**: Middleware for handling file uploads

## Project Structure

```
blog/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Assets/
│   │   ├── Images/         # Static images
│   │   └── Styles/         # CSS stylesheets
│   ├── Components/         # React components
│   │   ├── About.js        # About page
│   │   ├── AdminDashBoard.js # Admin dashboard
│   │   ├── Adminlogin.js   # Admin login
│   │   ├── AdminUser.js    # User management for admins
│   │   ├── BlogOpen.js     # Individual blog view
│   │   ├── BlogsVerify.js  # Blog verification for admins
│   │   ├── ChatAi.js       # AI chat component
│   │   ├── Comments.js     # Comments management
│   │   ├── Contactus.js    # Contact form
│   │   ├── Delete.js       # Account deletion
│   │   ├── Email.js        # Email verification
│   │   ├── Favourites.js   # User favourites
│   │   ├── Footer.js       # Site footer
│   │   ├── Landing.js      # Landing page
│   │   ├── Layout.js       # Main layout component
│   │   ├── Multiselector.js # Multi-select dropdown
│   │   ├── Passchange.js   # Password change
│   │   ├── Profile.js      # User profile
│   │   ├── ProUpgrade.js   # Pro account upgrade
│   │   ├── Registration.js # User registration
│   │   ├── Reports.js      # Reports and analytics
│   │   ├── Reviews.js      # Reviews management
│   │   ├── Settings.js     # User settings
│   │   ├── Uploads.js      # Blog upload
│   │   ├── User.js         # User login
│   │   └── UserHomepage.js # User homepage
│   ├── App.css             # Main app styles
│   ├── App.js              # Main app component
│   ├── App.test.js         # App tests
│   ├── index.css           # Global styles
│   ├── index.js            # App entry point
│   ├── logo.svg            # App logo
│   ├── reportWebVitals.js  # Performance monitoring
│   └── setupTests.js       # Test setup
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

**How to run the Frontend**
- cd blog
- npm start

**How to run the Backend**
- nodemon index.js


## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see [backend repository](https://github.com/mohammedashiqueofficial7/BlogBackend))

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Usage

### For Users
1. **Register**: Create a new account or log in if you already have one
2. **Explore Blogs**: Browse and read blog posts on the homepage
3. **Create Content**: Upload your own blogs with the AI assistant's help
4. **Interact**: Rate blogs, leave comments, and add to favourites
5. **Manage Profile**: Update your profile, change password, or delete account

### For Administrators
1. **Admin Login**: Access the admin panel with admin credentials
2. **Dashboard**: View platform statistics and manage users
3. **Content Moderation**: Approve blogs, manage comments and reviews
4. **User Management**: View and delete user accounts if necessary

## API Endpoints

The frontend communicates with the backend through various API endpoints. Key endpoints include:

- `/user/register` - User registration
- `/user/signin` - User login
- `/blogmodel/uploadblog` - Upload blog posts
- `/favourites/viewfavourites` - View user favourites
- `/admin/adminlogin` - Admin login
- And many more for various functionalities

For detailed API documentation, refer to the [backend repository](https://github.com/mohammedashiqueofficial7/BlogBackend).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

[backend code](https://github.com/mohammedashiqueofficial7/BlogBackend)