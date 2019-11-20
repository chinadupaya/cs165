class License < ActiveRecord::Base
    License.joins("INNER JOIN conditions ON conditions.condition = licenses.conditions")
end
