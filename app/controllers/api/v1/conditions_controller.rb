class Api::V1::ConditionsController < ApplicationController
    def index
      render json: Condition.all
    end
  
    def create
      cond = Condition.create(cond_params)
      render json: cond
    end
  
    def destroy
      Condition.destroy(params[:id])
    end
  
    def update
      cond = Condition.find(params[:id])
      cond.update_attributes(cond_params)
      render json: cond
    end
  
    private
  
    def cond_params
      params.require(:cond).permit(:id, :condition, :description)
    end
  end