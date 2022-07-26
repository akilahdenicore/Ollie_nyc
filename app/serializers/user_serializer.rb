class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :email, :address, :phone_number
end
