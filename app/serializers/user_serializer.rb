class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :email, :address, :phone_number

  has_many :orders
  has_many :carts

end
