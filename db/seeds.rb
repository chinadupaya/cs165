# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
conditions = ['A', 'B', 'C', 'D', 'E']
descriptions = ["Wearing corrective lenses.", 
"Drive only with customized vehicle.",
"Drive only w/ special equipment.",
"Daylight driving only.",
"With hearing aid."]
enum = conditions.each
enum2 = descriptions.each
loop do
    a1=enum.next
    a2=enum2.next
    Condition.create(condition:a1, description:a2)
end
r_meaning=["Motorcycle/Motorized Tricycles/E-Bikes/LSV/ TRIKES/A1/",
"Vehicles up to 4500 kgs GVW (Manual and Automatic Clutch)",
"Vehicles above 4500 kgs GVW (Manual and Automatic Clutch)",
"Automatic clutch only up to 4500 kgs GVW",
"Automatic clutch only above 4500 kgs GVW",
"Articulated 1600 GVW and below",
"Articlated 1601 up to 4500 GVW",
"Articulated 4501 GVW and above (truck-trailer)"]

for i in 0..7 do
    Restriction.create(code:i+1, meaning:r_meaning[i])
end

Employee.create(name: "Dupaya, Annysia", field_office: "LTO Diliman")
Employee.create(name: "Angeles, Mathena", field_office: "LTO Makati")
Employee.create(name: "Gopalan, Amberly", field_office: "LTO Cubao")
License.create(license_num:"1234", 
restriction_code:1,
application_type: "asdf",
license_type:"asdf", 
skill_acquire:"skill_acquire", 
conditions:"conditions", 
eval_name:"eval_name", 
organ_donor:"organ_donor")