exports.seed = function(knex, Promise) {
  return knex("listing").insert([
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/55390e8ee4b05abbe6eb0e43/1555078265582-0ITPX0SXCA6ALF0N2Q2C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/3303+River+Road_2019CHT_Furmansky_Print_448.jpg?format=1500w",
      title: "Beautiful and spacious house in downtown Berlin",
      accommodates: 1,
      bedrooms: 1,
      bathrooms: 1,
      size: 1,
      room_type: "Private room",
      price: 90,
      user_id: 1
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/55390e8ee4b05abbe6eb0e43/1555078265582-0ITPX0SXCA6ALF0N2Q2C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/3303+River+Road_2019CHT_Furmansky_Print_448.jpg?format=1500w",
      title: "A test house",
      accommodates: 1,
      bedrooms: 1,
      bathrooms: 1,
      size: 1,
      room_type: "Private room",
      price: 80,
      user_id: 1
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/55390e8ee4b05abbe6eb0e43/1555078265582-0ITPX0SXCA6ALF0N2Q2C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/3303+River+Road_2019CHT_Furmansky_Print_448.jpg?format=1500w",
      title: "Test house",
      accommodates: 1,
      bedrooms: 1,
      bathrooms: 1,
      size: 1,
      room_type: "Private room",
      price: 70,
      user_id: 1
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/55390e8ee4b05abbe6eb0e43/1555078265582-0ITPX0SXCA6ALF0N2Q2C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/3303+River+Road_2019CHT_Furmansky_Print_448.jpg?format=1500w",
      title:
        "Long description to show off that thing you set up to put ellipses after a certain amount of characters",
      accommodates: 1,
      bedrooms: 1,
      bathrooms: 1,
      size: 1,
      room_type: "Private room",
      price: 50,
      user_id: 1
    }
  ]);
};
