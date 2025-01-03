# 🛒 eretail-finder

## Overview

`eretail-finder` is a Chrome extension designed to dynamically detect specific classes on various e-commerce websites. This extension helps in identifying and highlighting elements such as banners, carousels, and other promotional content on retailer websites like Auchan, Carrefour, Intermarché, Leclerc, and SuperU.

## Features

- 🔍 Detects and highlights specific elements on e-commerce websites.
- 🛍️ Supports multiple retailers with custom selectors.
- ⚠️ Displays warnings for detected elements.
- 🔧 Easy to extend and customize for additional retailers.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/eretail-finder.git
    cd eretail-finder
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the project:
    ```sh
    npm run build
    ```

4. Load the extension in Chrome:
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable Developer mode.
    - Click on "Load unpacked" and select the [dist](http://_vscodecontentref_/1) directory.

## Usage

1. Navigate to one of the supported retailer websites (e.g., Auchan, Carrefour, Intermarché, Leclerc, SuperU).
2. Open the Chrome Developer Tools (F12).
3. Check the console for warnings about detected elements.

## Supported Retailers

- **Auchan**
  - 🏷️ Banners
  - 🛒 Squads
  - 🏷️ Totems
  - 🛒 Swords

- **Carrefour**
  - 🌟 Spotlights
  - 🦋 Butterflies
  - 🏷️ Vignettes
  - 🏷️ Banners

- **Intermarché**
  - 🏷️ Vignettes
  - 🎞️ Sliders
  - 🖼️ Quadriptyques
  - 🦋 Butterflies
  - 🍵 Matcha

- **Leclerc**
  - 🏷️ Banners
  - 🦋 Butterflies
  - 🛒 Gondoles

- **SuperU**
  - 🏷️ Vignettes

## Contributing

We welcome contributions from the community! To contribute to `eretail-finder`, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them with a descriptive message:
    ```sh
    git commit -m "Add feature: your feature name"
    ```
4. Push your changes to your fork:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request on the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or suggestions, please open an issue on the [GitHub repository](https://github.com/estxbxn/eretail-finder).

---

Thank you for using `eretail-finder`! We hope it helps you in your e-commerce endeavors.