import app from "./src/shared/interfaces/express/http-server";

const port: string = "3000";

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
