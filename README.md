[Live Demo](https://next-home.vercel.app)

## Installation

Clone this repo to your local machine and _cd_ into _next-home_ folder.

Then run:
```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Routes

### Backend

```
/api/v1/payments/<Contract Id>/read?startDate=<Start Date>&endDate=<End Date>
```

```
/api/v1/payments/<Contract Id>/create
```

```
/api/v1/payments/<id>/update
```

```
/api/v1/payments/<id>/delete
```

Basic starter data file is available under ```/data/payments.json```

### Frontend

To see the frontend challenge result, navigate to:
```
/user-form
```

