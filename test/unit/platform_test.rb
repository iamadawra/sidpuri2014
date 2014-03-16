# == Schema Information
#
# Table name: platforms
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  description  :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  email        :string(255)
#  organization :string(255)
#

require 'test_helper'

class PlatformTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
