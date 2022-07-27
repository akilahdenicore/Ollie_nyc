class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :date_available, :is_available, :quantity, :image_url
end
