class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :products, through: :reviews
    # has_many :orders
    # has_many :carts

end
