# YouTube Clone App

## Introduction

This project is a fully functional YouTube clone created using React, TypeScript, React Router, Redux Toolkit, and Tailwind CSS. It integrates with YouTube's Data API v3 to fetch video data and provides features such as infinite scroll, video playback, and search functionality.

## Features

- **Infinite Scroll:** Automatically fetch more videos as you scroll.
- **Video Playback:** Click on videos to watch, view details, and see recommended videos.
- **Search Functionality:** Search for videos using the YouTube Search API.

## Prerequisites

Before you can run the YouTube Clone App locally, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

- **Project Setup:** Create a React app using Create React App and Tailwind CSS.
- **Project Structure:** Organized directory structure for components, pages, store, and utilities.
- **Dependencies:** Includes React Icons, Axios, React Infinite Scroll, Redux Toolkit, and React Redux for state management.
- **Routing:** Implements React Router for seamless navigation.

## Components

- **Navbar:** Includes YouTube logo, search bar, and icons.
- **Sidebar:** Provides links and icons for different sections of the application.

## State Management

- **Redux Store:** Configures Redux store for state management.
- **Initial State:** Sets up initial state with placeholders for video-related data.
- **Redux Slice:** Creates Redux slice with initial state and reducers.

## API Integration

- **Async Thunk:** Fetches homepage video data using the YouTube API.
- **API Data Fetch:** Retrieves data from the YouTube Data API with query parameters.
- **Data Processing:** Processes API data, including video duration, view count, and channel information.
- **Redux Store Update:** Updates Redux store with processed video data.
- **Conditional Rendering:** Displays a spinner while data is loading and the InfiniteScroll component when data is available.
- **Infinite Scroll Integration:** Loads more videos based on a condition.

## Additional Topics

- **Debugging:** Learn how to debug TypeScript errors and ensure data is correctly typed.
- **Tailwind CSS:** Integrates the Tailwind CSS line clamp plugin for text truncation.
- **Bug Fix:** Resolves issues related to infinite scroll fetching the same videos.
- **Search Implementation:** Prepares for search functionality and creates a reducer to clear video data when changing pages.


## To Clone

Follow these steps to set up and run the YouTube Clone App:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/THARMATT/Youtube.git
