class Api::V1::RestrictionsController < ApplicationController
    def index
      render json: Restriction.all
    end
  
    def create
      res = Restriction.create(res_params)
      render json: res
    end
  
    def destroy
        Restriction.destroy(params[:id])
    end
  
    def update
      res = Restriction.find(params[:id])
      res.update_attributes(res_params)
      render json: res
    end
  
    private
  
    def res_params
      params.require(:cond).permit(:id, :code, :meaning)
    end
  end