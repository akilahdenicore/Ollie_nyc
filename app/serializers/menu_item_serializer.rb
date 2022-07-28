class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :image_url
end
