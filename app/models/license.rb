class License < ActiveRecord::Base
    validates :license_num, :presence => true, :uniqueness => true
end
