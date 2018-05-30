class Master < ActiveRecord::Base
  has_many :tests
  has_one :tan
  
  self.per_page = 20
  
  
end
