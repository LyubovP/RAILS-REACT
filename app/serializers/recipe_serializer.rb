class RecipeSerializer
  include JSONAPI::Serializer
  attributes :title, :image, :description, :instruction, :category, :user_id, :slug
  belongs_to :user
end
