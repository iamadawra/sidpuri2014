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

class Platform < ActiveRecord::Base
  attr_accessible :description, :name, :email, :organization
  validates_presence_of :name, :description

  validates :email, format: { with: /\b[A-Z0-9._%a-z\-]+@berkeley\.edu\z/,
                  message: "must be a valid Berkeley email" }
  has_reputation :votes, source: :user, aggregated_by: :sum

  def self.search(search)
    if search
      where('name LIKE ?', "%#{search}%")
    else
      scoped
    end
  end
  
end
