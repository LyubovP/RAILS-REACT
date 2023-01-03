class Api::V1::RecipesController < ApplicationController
    protect_from_forgery with: :null_session
    #before_action :authenticate_user!

    def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: RecipeSerializer.new(recipe).serializable_hash
    
    end

    def create
        recipe = Recipe.new(recipe_params)
        if recipe.save
            render json: RecipeSerializer.new(recipe).serializable_hash, status: :created
        else
            render json: {error: recipe.errors }, status: 422
        end
    end

    def update
        # byebug
        recipe = Recipe.find_by(id: params[:id])
        if recipe.update(recipe_params)
            render json: RecipeSerializer.new(recipe).serializable_hash
        else
            render json: {error: recipe.errors }, status: 422
        end
    end

    def destroy
        # byebug
        recipe = Recipe.find_by(id: params[:id])
        if recipe.destroy
          head :no_content
        else
            render json: {error: recipe.errors }, status: 422
        end
    end

private

    def recipe_params
        params.require(:recipe).permit(:title, :image, :description, :instruction, :user_id, :category)
    end
end