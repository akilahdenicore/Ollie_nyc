class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_many :menu_items
  has_one :user
end
