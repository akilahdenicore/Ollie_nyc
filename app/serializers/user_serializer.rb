class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email



  # has_many :orders
  # has_many :carts

end
