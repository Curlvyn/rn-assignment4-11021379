# rn-assignment4-11021379

## Description
This project is a mobile app developed for the DCIT202 Mobile Application Development course. It includes a login screen where users can enter their name and email, and a home screen that displays job listings. The app is built with React Native and matches the provided UI design.

## Components

### LoginScreen
- **Purpose**: Allows users to enter their name and email. When the login button is clicked, it navigates to the HomeScreen and passes the name and email.
- **File**: `src/screens/LoginScreen.js`

### HomeScreen
- **Purpose**: Displays the user's name and email received from the LoginScreen. It also shows lists of popular and featured job cards.
- **File**: `src/screens/HomeScreen.js`

### JobCard
- **Purpose**: A component that displays job details such as title, company, and location. Used in the HomeScreen to render job listings.
- **File**: `src/components/JobCard.js`

## Important React Native Components

### SafeAreaView
- **Purpose**: Ensures that content is displayed within the safe area boundaries of a device. Useful on devices with notches, rounded corners, or other UI elements that can obscure content.

### View
- **Purpose**: A fundamental component that acts as a container for other components and views. It can be styled and nested to create complex layouts.

### Image
- **Purpose**: Used to display images in a React Native application. Supports various image formats and can load images from local files or remote URLs.

### FlatList
- **Purpose**: A performant interface for rendering a list of items that can be scrolled vertically or horizontally. Optimizes rendering by only drawing items that are currently visible on the screen.

### ScrollView
- **Purpose**: Provides a scrolling container that can hold multiple components and views. Useful for layouts where the content can be larger than the screen size.

### StyleSheet
- **Purpose**: A utility for defining component styles in a more structured and optimized manner. Helps to separate style definitions from component logic.

### Text
- **Purpose**: A basic component for displaying text. Supports various styles, nesting, and can handle touch events.

### TextInput
- **Purpose**: A component for inputting text into the application. Can handle various types of text inputs and provides a range of customization options.


### Screenshot
