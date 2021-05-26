const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = () => {
  if ((phase = PHASE_DEVELOPMENT_SERVER)) {
    return {
      env: {
        mongodb_username: "sldsonny",
        mongodb_password: "s1e2a3t4b",
        mongodb_clustername: "@cluster0.gnpji",
        mongodb_database: "NEXT-fullBlog-project",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sldsonny",
      mongodb_password: "s1e2a3t4b",
      mongodb_clustername: "@cluster0.gnpji",
      mongodb_database: "Build Phase",
    },
  };
};
