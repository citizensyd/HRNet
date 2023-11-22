<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>HRNET</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat-square&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat-square&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat-square&logo=Webpack&logoColor=black" alt="Webpack" />
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=flat-square&logo=Redux&logoColor=white" alt="Redux" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat-square&logo=SemVer&logoColor=white" alt="SemVer" />
<img src="https://img.shields.io/badge/SVGO-3E7FC1.svg?style=flat-square&logo=SVGO&logoColor=white" alt="SVGO" />
<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat-square&logo=Lodash&logoColor=white" alt="Lodash" />
<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=flat-square&logo=Ajv&logoColor=white" alt="Ajv" />
<img src="https://img.shields.io/badge/Immer-00E7C3.svg?style=flat-square&logo=Immer&logoColor=white" alt="Immer" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/citizensyd/HRNet?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/citizensyd/HRNet?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/citizensyd/HRNet?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/citizensyd/HRNet?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running HRNet](#-running-hrnet)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
    - [*Contributing Guidelines*](#contributing-guidelines)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The "Accueil" project is the final milestone in a 2-year journey as a full-stack developer in training. Its goal is to upgrade the internal web application, HRnet, used by the financial giant WealthHealth, by replacing legacy jQuery code with React. The project, spanning 110 hours, emphasizes the importance of performance optimization, functional programming, and clear documentation. It involves converting HRnet to React, selecting and converting one jQuery plugin to a React component, and conducting performance tests. This project offers an opportunity to reduce technical debt and showcase skills in web development, deployment, and documentation.

---

## 📦 Features

   1 Conversion to React: Upgrading the legacy HRnet web application by converting it entirely to React, eliminating the reliance on jQuery.

   2 jQuery Plugin Conversion: Selecting and converting one of the four problematic jQuery plugins used in HRnet into a React component.

   3 Performance Testing: Conducting performance tests, particularly using Lighthouse audits, to measure and improve the application's speed and efficiency.

   4 Functional Programming: Embracing a functional programming paradigm when writing React components for better maintainability and modularity.

   5 Clear Documentation: Providing comprehensive documentation for the React components, including a README and comments, to ensure ease of use and understanding for the development team.

   6 Styling Consistency: Ensuring visual consistency in the application's design while converting it to React.

   7 State Management: Implementing a state management system, moving away from local storage.

   8 GitHub Repository: Maintaining a separate GitHub repository for the converted React code, allowing for easy collaboration and version control.

   9 Publication: Publishing the converted React library as an npm package or using GitHub Packages for potential reuse.

   10 Soutenance: Preparing for a presentation to demonstrate the project's achievements and methodology, followed by discussion and debriefing with the evaluator.

---


## 📂 Repository Structure

```sh
└── HRNet/
    ├── package.json
    ├── public/
    │   ├── index.html
    │   └── robots.txt
    ├── src/
    │   ├── App.js
    │   ├── Components/
    │   │   ├── CreateEmployee/
    │   │   ├── EmployeeList/
    │   │   ├── Layout/
    │   │   └── NotFound/
    │   ├── index.css
    │   ├── index.js
    │   ├── materiulUiTheme.js
    │   ├── mockedEmployee.js
    │   ├── Pages/
    │   │   └── Home/
    │   ├── slices/
    │   │   └── employeeSlice.js
    │   └── store.js
    └── yarn.lock

```

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Node 18.17.1`


### 🔧 Installation

1. Clone the HRNet repository:
```sh
git clone https://github.com/citizensyd/HRNet
```

2. Change to the project directory:
```sh
cd HRNet
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running HRNet

```sh
npm run start

```


---


## 🛣 Project Roadmap

Phase 1: Initial Setup and Environment Preparation

 Environment Setup

 Set up a new React project.
 Install and configure necessary development tools and dependencies.

         Create a GitHub repository for version control.

Phase 2: Convert HRNet to React

 Conversion of HRNet Pages

 Convert the "Create Employee" page to React.

     Convert the "Employee List" page to React.

 State Management

 Implement state management for the application.

     Ensure that the application uses Redux Toolkit for state management.

 Style Consistency

 Ensure that the styling is consistent throughout the application.

         Make design improvements if needed.

Phase 3: Convert jQuery Plugins to React

 Select a jQuery Plugin

     Choose one of the four jQuery plugins (date picker, modal, dropdowns, or tables) for conversion.

 Conversion of Chosen Plugin

 Convert the chosen jQuery plugin into a React component.

     Ensure that the React component provides the same functionality as the jQuery plugin.

 Create Custom React Components

 Create custom React components for the remaining three jQuery plugins.

         Ensure that each component is modular and follows React best practices.

Phase 4: Performance Testing and Optimization

 Performance Testing

 Perform performance tests using Lighthouse.

     Measure key performance metrics such as page load times and network requests.

 Optimization

 Identify and address performance bottlenecks.

         Optimize the React components and application for better performance.

Phase 5: Documentation and Publishing

 Documentation

 Document the converted React components with descriptions and usage instructions.

     Create a README for the project with setup and usage guidelines.

 Publish React Component

     Publish the converted React component on npm or GitHub Packages.

 Performance Report

         Generate a performance report comparing the old and new versions of the application.

Phase 6: Finalization and Review

 Code Review

 Conduct a code review to ensure code quality and adherence to best practices.

     Address any feedback and make necessary improvements.

 Final Testing

     Perform final testing to verify that all components and functionality work as expected.

 Project Submission

 Prepare and organize project deliverables as specified.

         Submit the project for evaluation.

Phase 7: Presentation and Soutenance

 Prepare Presentation

     Create a presentation summarizing the project, its challenges, and solutions.

 Soutenance

 Present the project, including the roadmap, to the evaluation committee.

     Answer questions and discuss the methodology and results.

 Debrief

         Engage in a debrief session with the evaluation committee to discuss feedback and improvements.

Phase 8: Project Completion

 Project Completion

 Address any final feedback or revisions.

     Consider any additional improvements or enhancements.

 Project Closure

 Close the project, archive documentation, and celebrate the successful conversion of HRNet to React!


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/citizensyd/HRNet/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/citizensyd/HRNet/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/citizensyd/HRNet/issues)**: Submit bugs found or log feature requests for CITIZENSYD.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- Special thanks to my mentor, Adrien, for his invaluable guidance and support. I'm also grateful to OpenClassrooms for providing an excellent learning platform that has significantly contributed to my development journey.

[**Return**](#Top)

---

