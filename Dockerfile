# Base image
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Copy project files
COPY . /playwright-tests

# Set working directory
WORKDIR /playwright-tests

# Install dependencies
RUN npm ci

# Run tests
CMD ["npm", "run", "test"]