# == Schema Information
#
# Table name: platforms
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Platform < ActiveRecord::Base
  attr_accessible :description, :name
end
