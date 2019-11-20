class Api::V1::LicensesController < ApplicationController
    def index
      render json: License.all
    end
  
    def create
        license = License.create(license_params)
      render json: license
    end
  
    def destroy
        License.destroy(params[:id])
    end
  
    def update
      license = License.find(params[:id])
      license.update_attributes(license_params)
      render json: license
    end
  
    private
  
    def license_params
      params.require(:license).permit(:license_num,
      :restriction_code,
      :application_type,
      :license_type,
      :skill_acquire,
      :conditions,
      :eval_name,
      :organ_donor)
    end
  end