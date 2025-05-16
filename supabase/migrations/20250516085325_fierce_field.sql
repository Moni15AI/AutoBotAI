/*
  # Update company_name constraint

  1. Changes
    - Modify `company_name` column in `info` table to allow NULL values
    - This change makes the company name field optional in the contact form

  2. Reasoning
    - Contact forms often have optional company fields
    - Not all users will be representing a company
*/

ALTER TABLE info 
ALTER COLUMN company_name DROP NOT NULL;