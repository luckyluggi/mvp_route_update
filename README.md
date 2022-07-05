# Repro Steps
- `cd ./my-appshell` and run `npm i` and then `npm run build`
- `cd ../layout-pilet` and run `dotnet build`
- `cd ../my-pilet` and run `dotnet build`
- `cd ../piral~/my-pilet` and run `npm start`

# Problem
When you click `Page 1` in the top right you will be redirected to `/my-pilet-1`.
You will see that the Page 1 Link at the top right as well as on the Page will not have an `active` class.
If you press F5 now both links will get the active class and will display in red color.
The Navlink Component is normaly updated automatically in a default Blazor App.

If you now switch to page 2 the `active` class is not updated.
You will also see that it still says `I am on "my-pilet-1"` in the top left corner. This is because `LocationChanged` in `layout-pilet\Components\Topbar.razor` was never called.