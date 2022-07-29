class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :menu_item
  has_one :cart
end
