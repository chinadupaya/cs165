class Api::V1::LicenseInfosController < ApplicationController
    def index
      render json: "LicenseInfo.all"
    end
  
    def create
        info = LicenseInfo.create(info_params)
      render json: info
    end
  
    def destroy
        LicensInfo.destroy(params[:id])
    end
  
    def update
      info = LicenseInfo.find(params[:id])
      info.update_attributes(info_params)
      render json: info
    end
  
    private
  
    def info_params
      params.require(:info).permit(:license_num,
      :restriction_code,
      :application_type,
      :license_type,
      :skill_acquire,
      :conditions,
      :eval_name,
      :organ_donor)
    end
  end