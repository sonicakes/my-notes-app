# My notes app

This is a project based on publicly available app design found on Behance:

- [The Simple Note Taking App](https://www.behance.net/gallery/176885925/The-Simple-Note-Taking-App) 

This project is created to practice with the concept of Forms, Input & Controlled Components in React following this Udemy course:

- [Modern React From The Beginning](https://www.udemy.com/course/modern-react-from-the-beginning) 

## App features

- Ability to create a new note and see it in the list in the look of a physical 'Sticky note'.
- The colours of sticky notes will be randomly selected from array of pastel colors given in the design palette.
- Some design features (e.g. Category modal with selection/notes addition) have been moved to laundry list to focus on main concepts of the material in this project.
- Mobile first design which fits with only mobile UI design being provided.
- Local storage for state preservation.
- Ability to delete a note from state.
- Ability to collapse/expand note form (by clicking on + symbol as per design).
- Seeing 'confirm' sign when about to delete a note.
- Ability to mark a note based on a priority of 'High', 'Medium' and 'Low' - this would render a colour tag on each note.
- Ability to add a title and description to a new note (both fields are required).
- Ability to categorize a note based on 'Work', 'Personal', 'Pets' and 'Study'
- Ability to display categories as tab/pillss for further filtering.
- Ability to pin & unpin a note which will put a pin icon & also move it up to the top of the list.

## Changes to the original

- The OG design does not have desktop design, so have designed my own UI for larger screens - grid of notes.
- In design the recommended font is Avenir. I've found the download link for it but not sure about the copyright etc. So, instead of Avenir font, I used Mulish Google Font: [Mulish in Google Font Library](https://fonts.google.com/specimen/Mulish).
- There is an icon set specified in the file but there is no option to download, so I've used React Icons, specifically [Lucide](https://lucide.dev/).
- Some design features (e.g. Category modal with selection/notes addition) have been moved to laundry list to focus on main concepts of the material in this project.

## Laundry list

- Search input for notes & ability to search
- Calendar filters & ability to drone in from calendar to specific day to see notes
- Category additions & modal to select multiple categories being displayed
- WSWG editor style for a new note form
