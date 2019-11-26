class Api::V1::JoinsController < ApplicationController
    def index
        render json: License.select("licenses.*,restrictions.*,conditions.*,employees.*").joins("LEFT JOIN restrictions ON restrictions.code=licenses.restriction_code").joins("LEFT JOIN conditions ON conditions.condition = licenses.conditions").joins("LEFT JOIN employees ON employees.name = licenses.eval_name")
    end
end