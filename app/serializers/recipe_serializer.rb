class RecipeSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :instruction, :category, :user_id, :slug
  belongs_to :user
end
