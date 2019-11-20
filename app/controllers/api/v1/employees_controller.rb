class Api::V1::EmployeesController < ApplicationController
    def index
      render json: Employee.all
    end
  
    def create
      emp = Employee.create(emp_params)
      render json: emp
    end
  
    def destroy
        Employee.destroy(params[:id])
    end
  
    def update
      emp = Employee.find(params[:id])
      emp.update_attributes(emp_params)
      render json: emp
    end
  
    private
  
    def emp_params
      params.require(:emp).permit(:id, :name, :field_office)
    end
  end