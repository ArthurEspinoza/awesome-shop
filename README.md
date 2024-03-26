# Awesome shop

This is a simil to an online shop using the API provided by the recruitment team

## Technologies

- Vite
- Vue3
- Vue Router
- Pinia
- Vuetify
- Axios
- Material design icons

## Steps to run this shop

You must have installed Node.js above version 18 and NPM above version 8

1. Clone this repository
2. Move to that folder in your computer and execute the command **npm install**
3. Create a .env file in the root folder and since this project is using Vite you must create a variable called **VITE_API_KEY** and assign your key to that
4. Finally run the following command **npm run dev** to run locally your server for the application

## A little explanation of the application

On the views folder we have 3 files that corresponds to each view that the application has. The ProductView file is the one that it shows on the home route / and shows the product catalog, where each item shows an images, its name and price, there you can see more details clicking on the button there or adding it directly to your cart.

The DetailsView file is showed on the route /details/:id where the id is the one from the product you click on, it shows more information like description and stock, there you can also add the product to your cart.

Finally the last file CartView is showed on the route /cart whether you go there by clicking on the navigation bar or over the cart icon on the top right corner, it lists the products that you added and the amount of them, giving you the total money for all of them, there you can reduce the amount, rise it or even delete the product in your cart. When you are ready to finish your buy, you can click to the checkout button
