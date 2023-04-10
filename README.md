# Image-Generator-App

project deployed in vercel : [https://image-generator-app.vercel.app/]

# Image-Generator-App

Image Generator App is a web application built with React that generates random images based on user preferences. The application uses OpenAI's DALL-E API to generate unique and creative images based on user input.

## Installation

To install and run the application, follow these steps:

### Frontend

- Clone the repository: git clone https://github.com/toiaa/Image-Generator-App.git
- Navigate to the project directory: cd Image-Generator-App cd client
- Install the dependencies: npm install
- Start the development server: npm start
- Open your browser and navigate to http://localhost:5173

### Backend

- Navigate to the project directory: cd Image-Generator-App cd server
- Install the dependencies: npm install
- Run the server: npm start
- Open your browser and navigate to http://localhost:8080

### Keep in mind: This project its deployed so:

- Frontend: https://image-generator-app.vercel.app/
- Backend: https://image-generator-app-1xvs.onrender.com
- If you want to run it in a your local host you will need to change the folowing files:
- client/src/pages/CreatePost.jsx : change lines 22 asn 49 to "http://localhost:8080/api/v1/dalle",
- client/src/pages/Home.jsx : change line 20 to "http://localhost:8080/api/v1/dalle",

## Usage

Once the application is running, you can use the following options to generate images:
Name: Enter your name.
Input: Enter a text prompt describing the image you want to generate. You can be as specific or vague as you like. DALL-E will try to interpret your prompt and generate an image accordingly.
Generate: Click the "Generate" button to generate a random image based on your prompt description.
Share with the community: You can share the image you generated to the community on the application, the home page has the images other people generated and wanted to share. With their prompt and name aswell.

## Contributing

Contributions to the project are welcome! To contribute, follow these steps:

Fork the repository: https://github.com/toiaa/Image-Generator-App.git
Create a new branch: git checkout -b my-feature-branch
Make changes and commit them: git commit -m "Add new feature"
Push changes to the branch: git push origin my-feature-branch
Submit a pull request

## Acknowledgements

This project was inspired by Open AI's product the DALL-E and uses their API to generate the images you see. Special thanks to the OpenAI team for providing a free and easy-to-use API for retrieving high-quality images!
Thanks to the Render team for providing a free hosing web service for deploying the backend!
Thanks to the Vercel team for providing a free hosting service for deploying the frontend!
