# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  guest      :boolean
#

class User < ActiveRecord::Base
  attr_accessible :name

  def self.new_guest
    new { |u| u.guest = true }
  end
  
  def name
    guest ? "Guest" : name
  end
end
