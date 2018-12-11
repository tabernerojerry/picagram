import { app, server } from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
