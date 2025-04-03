# 🚗 PakWheels MVP Clone – Full Documentation

## 📌 Project Overview
This is a **bare-minimum web-based MVP clone of PakWheels**, built using Node.js, Express, and HTML/JS frontend. The goal was to replicate the core features of an online car marketplace in the simplest form possible — something that runs locally, instantly, and has real-world application feel.

---

## 🛠️ Tech Stack

| Layer        | Tech Used           | Purpose                                      |
|--------------|---------------------|----------------------------------------------|
| Frontend     | HTML, CSS, Vanilla JS | Lightweight UI, instant load                 |
| Backend      | Node.js, Express.js | Handle API endpoints and file storage        |
| File Upload  | Multer              | Upload and store car images                  |
| Database     | JSON File (cars.json) | Persistent storage without DB setup          |
| Hosting      | Localhost (port 3000) | Runs instantly on local machine              |
| AI Tool Used | ChatGPT (OpenAI)    | Helped plan, build, write and debug features |

---

## ✨ Features Implemented

### 🔹 Post Car Ad
- Upload multiple car images
- Enter brand, model, price, description, and location

### 🔹 Browse Cars
- List of all car ads
- Show price and location at the top
- Image gallery / mini carousel for multiple images

### 🔹 Filters
- Filter by brand and model
- Toggle between "Available" and "Sold" tabs

### 🔹 Buy Now
- Prompt buyer name
- Mark car as sold
- Show sold badge over image

### 🔹 Maps Integration
- Location links open directly in Google Maps

### 🔹 Real App Feel
- Instant update after buying
- Toast message confirmation
- Tab switching between views

### 🔹 Branding
- PakWheels-style banner header with logo

---

## 🧠 Code Explanation (Highlights)

### Backend (`server.js`)
- **Express** serves static files and handles API routes
- **Multer** handles image uploads to `public/uploads/`
- Cars are saved in a JSON file (`cars.json`) with fields like:
  ```json
  {
    "id": 123456,
    "title": "Honda Civic",
    "brand": "Honda",
    "model": "Civic",
    "location": "Lahore",
    "images": ["/uploads/img1.jpg", "/uploads/img2.jpg"],
    "sold": false
  }
  ```
- `POST /api/cars` — creates new ads
- `POST /api/cars/:id/buy` — marks car as sold

### Frontend (`index.html`)
- Form with fields and file input (`name="images"` for multiple upload)
- JavaScript fetches and renders cars
- Carousel for images with SOLD badge overlay
- Google Maps link created dynamically
- Buy Now button sends request to mark car sold

---

## 🤖 Role of ChatGPT (AI Assistant)
ChatGPT helped with:
- Defining MVP scope and architecture
- Writing backend and frontend code from scratch
- Debugging Multer errors ("Unexpected field")
- Migrating from `image` to `images[]` array
- Improving UI flow (Buy Now, Toast, Tabs)
- Real-time suggestions and iteration
- Creating this documentation ✍️

---

## 💬 Prompt History

1. I want to build a PakWheels MVP
2. I want it to run on Windows
3. Add filters, images, style
4. Add Buy Now feature
5. Improve layout and spacing
6. Add location and show price better
7. Add SOLD badge, multiple image upload, map link
8. Migrate image to images[] format
9. Buy button not showing → fixed
10. Add PakWheels banner → image issue → fixed
11. Full index.html & server.js request
12. Final documentation

---

## 📁 Project Structure

```
pakwheels-clone/
├── server.js
├── cars.json
├── public/
│   ├── index.html
│   ├── logo.png
│   └── uploads/
```

---

## 🚀 Getting Started

### 1. Clone or create project folder
```
mkdir pakwheels-clone
cd pakwheels-clone
```

### 2. Initialize & install dependencies
```
npm init -y
npm install express multer
```

### 3. Add files:
- `server.js` from code
- `cars.json` as `[]`
- `public/index.html` from provided HTML
- Create folder `public/uploads`

### 4. Run it:
```
node server.js
```
Visit: http://localhost:3000

---

## 🏁 What's Next?
- User login / seller dashboard
- Edit / delete ads
- Messaging between buyers/sellers
- Firebase or MongoDB for real DB

---

## 🙌 Final Words
I've just built a functioning, styled, buyable car marketplace MVP using only:
- Node.js
- Vanilla JS + HTML
- Multer
- AI support from ChatGPT

That's **startup energy in action** 🚀💯

