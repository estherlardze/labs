module.exports = {
    transform: {
      "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
      '^.+\\.(svg|png|jpg|jpeg|gif|webp)$': 'jest-transform-stub',  // Mock static files
 
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
      '\\.svg$': 'jest-transform-stub',  // Add SVG mocks
 
    },
    transformIgnorePatterns: ["/node_modules/(?!ts-jest)"],
  };