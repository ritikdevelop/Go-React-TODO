# Working Stage

FROM node:22-alpine AS node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Production Stage

FROM node:22-alpine AS production

WORKDIR /app

# Copy package files needed for production
COPY --from=node /app/package.json ./
COPY --from=node /app/package-lock.json ./


# Install serve globally for serving the production build
RUN npm install -g serve
ENV PATH = /usr/local/bin:$PATH
# Copy the built dist folder
COPY --from=node /app/dist ./dist


EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
