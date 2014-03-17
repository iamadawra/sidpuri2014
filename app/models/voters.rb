class Voters < ActiveRecord::Base
  attr_accessible :ip
  validates_uniqueness_of :ip
end
