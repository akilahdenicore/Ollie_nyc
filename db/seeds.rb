# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# MenuItem.create(item_name: "FEIJOADA", description: "Traditional black bean stew with pork and beef. Vegetarian option with mushrooms and vegetables. Served with rice, collard greens, garlic, almond farofa, Brazilian hot sauce, banana tartare. Serves 2.", price: 42, image_url: "/menu_photos/feijoada-colors-1.jpeg") 
# MenuItem.create(item_name: "BACALHAU A 'GOMES DE SANTOS'", description: "Salt cod, potato, onion, tomato, hard-boiled egg and black olives. Vegetarian option with roasted cauliflower. Served with broccoli rice, almond farofa, and Urca's hot sauce. Serves 2.", price: 42, image_url: "/menu_photos/bacalhau-one.jpeg") 
# MenuItem.create(item_name: "FRANGO COM QUIABO", description: "Braised chicken with okra. Served with creamy parmesan polenta, toasted okra, and Urca's hot sauce. Serves 2", price: 38, image_url: "/menu_photos/frango-quiabo-1.jpeg")
# MenuItem.create(item_name: "PICANHA ACEBOLADA", description: "Picanha steak with sauteed onions and roasted garlic. Served with mashed yucca puree, sous vide egg, and black-eyed pea vinaigrette salsa. Vegetarian option: grilled portabello. Serves 2.", price: 42, image_url: "/menu_photos/picanha-acebola-1.jpeg")
# MenuItem.create(item_name: "RABADA", description: "Oxtail served with creamy polenta, organic watercress, with a lime and mustard dressing. Serves 2", price: 42, image_url: "/menu_photos/rabada-1.jpeg")
# MenuItem.create(item_name: "STROGONOFF/STROGANOFF", description: "A Brazilian version of a Russian classic. Served with shoestring fries and rice. Serves 2", price: 38, image_url: "/menu_photos/strogonoff-1.jpeg")
# MenuItem.create(item_name: "MOQUECA", description: "White fish and shrimp stew with red palm oil. Served with coconut rice, fish broth, yucca grits, and hot sauce. Veggie option available with mushrooms and heart of palm. Serves 2.", price: 34, image_url: "/menu_photos/moqueca-2.jpeg")
# MenuItem.create(item_name: "BOBÓ DE CAMARÃO", description: "Traditional Brazilian shrimp dish that includes coconut milk, ginger, tomatoes and herbs, Served with almond farofa and white rice. Serves 2", price: 34, image_url: "/menu_photos/bobo-camarao-1.jpeg")
# MenuItem.create(item_name: "CARNE DE PANELA", description: "Slow-cooked beef with vegetables. Served with rice, yucca in  manteiga de garrafa (Brazilian country-style butter).", price: 38, image_url: "/menu_photos/carne-panela-1.jpeg")
# MenuItem.create(item_name: "FRANDO EMPANADO & CREME DE MILHO", description: "Crispy chicken with creamy sweet corn, served with rice and Brazilian sweet vinaigrette. Veggie option avilable with crispy eggplant. Serves 2.", price: 32, image_url: "/menu_photos/frango-empanado-1.jpeg")
# MenuItem.create(item_name: "CAMARÃO NA MORANGA", description: "Shrimp in creamy pumpkin puree with Catupiry, Brazil's unique soft cheese. Served with rice grilled pumpkin and bacon biju. Serves 2.", price: 34, image_url:"/menu_photos/camarao-moranga-1.jpeg")
# MenuItem.create(item_name: "PAO DE QUIEJO", description: "Brazilian cheese bread made with tapicoa starch and a special blend of cheeses. Six Pieces.", price: 35, image_url: "/menu_photos/pao-1.jpeg")
# MenuItem.create(item_name: "URCA'S HOT SAUCE", description: "Hot sauce blended with a mix of peppers harvested in the north region of Brazil. Available in 5 oz. jars.", price: 8, image_url: "/menu_photos/hot-sauce-1.jpeg")
# MenuItem.create(item_name: "ALMOND FAROFA", description: " Yucca flour toasted with butter, onion, garlic, parsley and roasted almonds. Great for adding crunch and flavor to many meals. We like it best with stews, steaks, salads, and of course at a BBQ. Available in 9 oz. bags.", price: 15, image_url: "/menu_photos/farofa-1.jpeg")



User.create(username: "admin", password: "admin0", password_confirmation: "admin0", email: "admin@email.com", is_admin: true, user_id: 1)
User.create(username: "mimi", password: "mimi0", password_confirmation: "mimi0", email: "mimi@email.com", is_admin: false, user_id: 2)

Product.create(product: "Cocktail No. 1", description: "Elijah Craig Bourbon, Cynar, Mint, Lemon", price: 16, product_id: 1)
Product.create(product: "Cocktail No. 2", description: "Hamilton 86 Rum, Pineapple, Lime, Honey St. Agrestis Inferno bitter", price: 16, product_id: 2)
Product.create(product: "Cocktail No. 3", description: "Pandan infused Altos Olmeca Tequila, Strawberry, Coconut, Lemon", price: 16, product_id: 3)
Product.create(product: "Cocktail No. 4", description: "Plymouth Gin, Grapefruit Cordial, Lemon, St Agrestis Paradiso Apertivo", price: 16, product_id: 4)
Product.create(product: "Cocktail No. 5", description: "Mezcal, Beet Shrub, Pineapple, Ginger, Lemon", price: 16, product_id: 5)
Product.create(product: "Cocktail No. 6", description: "Cana Cachaca, Orgeat, Lime, Ginger, Granny Smith Apple", price: 16, product_id: 6)
Product.create(product: "Cocktail No. 7", description: "Mi Campo Tequila, Passion Fruit, Coconut Water, Lemon, Aperol, Cinnamon, Aquafaba", price: 16, product_id: 7)
Product.create(product: "Cocktail No. 8", description: "Tito’s, Blackberry Jam, Vanilla, Dolin Dry, Lemon, Chocolate bitters", price: 16, product_id: 8)
Product.create(product: "Queen of Diamonds", description: "Raspberry + Hibiscus infused Junipero Gin, Lilet Rose, Lemon, Raspberry Foam (Clover Club)", price: 16, product_id: 9)
Product.create(product: "The BLVD (Boulevardier", description: "Peanut Butter Washed Woodford Reserve, Campari, Aperol, Antica Vermouth. Served on the Rock", price: 16, product_id: 10)
Product.create(product: "Summer Old Fashioned", description: "Strawberry Infused David Nicholas Bourbon, Daytrip Amaro, Vanilla,1 Tiki Bitters", price: 16, product_id: 11)
Product.create(product: "Mocktail No. 1", description: "Pineapple, Lime, House Grenadine, Club Soda", price: 10, product_id: 12)
Product.create(product: "Mocktail No. 2", description: "Spiced Cider, Pineapple, Cinnamon, Lime", price: 11, product_id: 13)
Product.create(product: "Athletic Brewing Run Wild IPA", description: "Non-alcoholic IPA", price: 7, product_id: 14)
Product.create(product: "Coastal Craft Kombucha", description: "Hampton Heat (Pineapple, Turmeric, Cayenne) Beach Street (Blueberry Hibiscus)", price: 10, product_id: 15)
Product.create(product: "Collective Arts Audio/Visua", description: "Lager (4.9%)", price: 9, product_id: 16)
Product.create(product: "LIC Project Coded Tile", description: "American Pale Ale (5%)", price: 9, product_id: 17)
Product.create(product: "Graft Farm Flor", description: "Dry Hopped Cider (6.9%)", price: 9, product_id: 18)
Product.create(product: "Victory Prima Pils", description: "Pilsner (5.3%, 12oz can)", price: 7, product_id: 19)
Product.create(product: "Firestone Walker Merlin", description: "Nitro Stout (5.5%, 12oz can)", price: 8, product_id: 20)
Product.create(product: "Threes Brewing Logical Conclusion", description: "Hazy IPA (7%, 16oz can)", price: 9, product_id: 21)
Product.create(product: "Half Acre Daisy Cutter", description: "Pale Ale (5.2%, 16oz can)", price: 8, product_id: 22)
Product.create(product: "Franco Amoroso", description: "Veneto, Italy - Prosecco", price: 12, product_id: 23)
Product.create(product: "Domaine de la Guilloterie", description: "Saumur, France - Chenin Blanc", price: 14, product_id: 24)
Product.create(product: "Iconic 'Sidekick'", description: "Lodi, California - Chardonnay", price: 14, product_id: 25)
Product.create(product: "Domaine des Vieux", description: "Sancerre, France - Sauvignon Blanc", price: 15, product_id: 26)
Product.create(product: "Antoniolo", description: "Gattinara, Italy - Rose", price: 14, product_id: 27)
Product.create(product: "Unico 'Fresh A.F'", description: "Lower Murray, Australia - Nero d'Avola", price: 14, product_id: 28)
Product.create(product: "Averaen", description: "Willamette Valley, Oregon - Pinot Noir", price: 15, product_id: 29)
Product.create(product: "Bishops Peak", description: "Paso Robels, California - Cabernet Sauvignon", price: 16, product_id: 30)
Product.create(product: "Nibble Tray", description: "Olives, Chorizo, Aged Gouda", price: 14, product_id: 31)
Product.create(product: "Spiced Nuts (V) (GF)", description: "Toasted Almonds, Hazelnuts, Brazil Nuts, Peanuts, and Walnuts, Brown Sugar, Salt, Spices", price: 10, product_id: 32)
Product.create(product: "Pao de Queijo (V) (GF)", description: "Classic Brazilian Cheese Bread, Honey, Scallion Cream Cheese", price: 9, product_id: 33)
Product.create(product: "Roasted Brussels", description: "Peanuts, Thai Bird Chilis, Fish Sauce Vinaigrette", price: 14, product_id: 34)
Product.create(product: "Tuna Crudo (GF)", description: "Spiced Dashi, Puffed Wild Rice, Radish, Red Onion", price: 18, product_id: 35)
Product.create(product: "Winter Salad (Vegan)", description: "Watercress, Radicchio, Endive, Squash, Caramelized Walnuts, Asian Pear, Maple Vinaigrette", price: 16, product_id: 36)
Product.create(product: "The Burger", description: "Pat LaFrieda blend beef, Tickle Cheddar, House Pickles, Caramelized Onions, Tomatoes", price: 18, product_id: 37)
Product.create(product: "Waygu Roast Beef Sandwich", description: "Roasted Wagyu Picanha, Fresh Horseradish, Sweet & Sour Onions, Watercress, Mustard", price: 20, product_id: 38)
Product.create(product: "Vegan Veggie Sandwich", description: "Grilled Zucchini, Avocado, Spiced Hummus, Pickled Shallots, Tomato, Spouts w/ Roasted Potato Wedges", price: 14, product_id: 39)
Product.create(product: "Shitake Tacos (GF, Vegan)", description: "Shitake Mushrooms, Homemade Tortillas, Avocado Cream, Red Onion, Micro Greens", price: 13, product_id: 40)



Review.create(rating: 5, product_review: "This place is well worth a stop! We sat at the bar and enjoyed the company of a lovely bartender and throughly enjoyed both the drinks and snacks we had.  The cocktail menu changes seasonally. But If you’re visiting in the summer I highly suggest the number 5. Also the peanut butter old fashioned is great!", user_id: 2, product_id: 5)
Review.create(rating: 5, product_review: "One of the best places for drinks and nibbles in WV. Tried cocktails 1, 2, 7 and 8 and all of them were amazing (as was our server Leo who was knowledgeable about the drinks and super attentive)!", user_id: 2, product_id: 2)
Review.create(rating: 4, product_review: "Great cocktails, good food and very friendly staff. We  tried a few cocktails, Pao de Queijo (Brazilian cheese bread- a must try), Shitake tacos and the grain bowl !A good vibe of a cocktail bar", user_id: 2, product_id: 40)
Review.create(rating: 5, product_review: "They have a great selection of cocktails - so much too choose from. We got a variety of drinks from the menu and they were all great! Food is so delicious, especially the Brazilian cheesy bread! Staff took amazing care of us, will  def recommend!", user_id: 2, product_id: 33)
Review.create(rating: 5, product_review: "I’ve lived in the city for two years; I love cocktails and dining out in general and these are hands down the BEST COCKTAILS I’ve ever had while living here! Special shoutout to cocktail no.7 (tequila & passionfruit deliciousness)!", user_id: 1, product_id: 7)
Review.create(rating: 5, product_review: "Super trendy spot in a great location! (Right off the 1). Great ambiance, cocktails, and food. Highly recommend Cocktail #6 and the charred carrots.", user_id: 1, product_id: 6)



  /



# create_table "reviews", force: :cascade do |t|
#     t.integer "rating"
#     t.text "product_review"
#     t.bigint "product_id", null: false
#     t.bigint "user_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["product_id"], name: "index_reviews_on_product_id"
#     t.index ["user_id"], name: "index_reviews_on_user_id"
#   end