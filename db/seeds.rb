# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

MenuItem.create(item_name: "FEIJOADA", description: "Traditional black bean stew with pork and beef. Vegetarian option with mushrooms and vegetables. Served with rice, collard greens, garlic, almond farofa, Brazilian hot sauce, banana tartare. Serves 2.", price: 42, image_url: "/menu_photos/feijoada-colors-1.jpeg") 
MenuItem.create(item_name: "BACALHAU A 'GOMES DE SANTOS'", description: "Salt cod, potato, onion, tomato, hard-boiled egg and black olives. Vegetarian option with roasted cauliflower. Served with broccoli rice, almond farofa, and Urca's hot sauce. Serves 2.", price: 42, image_url: "/menu_photos/bacalhau-one.jpeg") 
MenuItem.create(item_name: "FRANGO COM QUIABO", description: "Braised chicken with okra. Served with creamy parmesan polenta, toasted okra, and Urca's hot sauce. Serves 2", price: 38, image_url: "/menu_photos/frango-quiabo-1.jpeg")
MenuItem.create(item_name: "PICANHA ACEBOLADA", description: "Picanha steak with sauteed onions and roasted garlic. Served with mashed yucca puree, sous vide egg, and black-eyed pea vinaigrette salsa. Vegetarian option: grilled portabello. Serves 2.", price: 42, image_url: "/menu_photos/picanha-acebola-1.jpeg")
MenuItem.create(item_name: "RABADA", description: "Oxtail served with creamy polenta, organic watercress, with a lime and mustard dressing. Serves 2", price: 42, image_url: "/menu_photos/rabada-1.jpeg")
MenuItem.create(item_name: "STROGONOFF/STROGANOFF", description: "A Brazilian version of a Russian classic. Served with shoestring fries and rice. Serves 2", price: 38, image_url: "/menu_photos/strogonoff-1.jpeg")
MenuItem.create(item_name: "MOQUECA", description: "White fish and shrimp stew with red palm oil. Served with coconut rice, fish broth, yucca grits, and hot sauce. Veggie option available with mushrooms and heart of palm. Serves 2.", price: 34, image_url: "/menu_photos/moqueca-2.jpeg")
MenuItem.create(item_name: "BOBÓ DE CAMARÃO", description: "Traditional Brazilian shrimp dish that includes coconut milk, ginger, tomatoes and herbs, Served with almond farofa and white rice. Serves 2", price: 34, image_url: "/menu_photos/bobo-camarao-1.jpeg")
MenuItem.create(item_name: "CARNE DE PANELA", description: "Slow-cooked beef with vegetables. Served with rice, yucca in  manteiga de garrafa (Brazilian country-style butter).", price: 38, image_url: "/menu_photos/carne-panela-1.jpeg")
MenuItem.create(item_name: "FRANDO EMPANADO & CREME DE MILHO", description: "Crispy chicken with creamy sweet corn, served with rice and Brazilian sweet vinaigrette. Veggie option avilable with crispy eggplant. Serves 2.", price: 32, image_url: "/menu_photos/frango-empanado-1.jpeg")
MenuItem.create(item_name: "CAMARÃO NA MORANGA", description: "Shrimp in creamy pumpkin puree with Catupiry, Brazil's unique soft cheese. Served with rice grilled pumpkin and bacon biju. Serves 2.", price: 34, image_url:"/menu_photos/camarao-moranga-1.jpeg")
MenuItem.create(item_name: "PAO DE QUIEJO", description: "Brazilian cheese bread made with tapicoa starch and a special blend of cheeses. Six Pieces.", price: 35, image_url: "/menu_photos/pao-1.jpeg")
MenuItem.create(item_name: "URCA'S HOT SAUCE", description: "Hot sauce blended with a mix of peppers harvested in the north region of Brazil. Available in 5 oz. jars.", price: 8, image_url: "/menu_photos/hot-sauce-1.jpeg")
MenuItem.create(item_name: "ALMOND FAROFA", description: " Yucca flour toasted with butter, onion, garlic, parsley and roasted almonds. Great for adding crunch and flavor to many meals. We like it best with stews, steaks, salads, and of course at a BBQ. Available in 9 oz. bags.", price: 15, image_url: "/menu_photos/farofa-1.jpeg")


User.create(name: "akilah", username: "admin", password: "admin0", password_confirmation: "admin0", email: "admin@email.com",  address: "123 Urca Way", phone_number: "888 888 8888", is_admin: true)
User.create(name: "mimi", username: "mimi", password: "mimi0", password_confirmation: "mimi0", email: "mimi@email.com", address: "234 Catnip Ave", phone_number: "999 999 9999", is_admin: false)









