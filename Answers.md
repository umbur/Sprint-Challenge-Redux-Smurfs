Q: In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: Actions in Redux are packets of information that contain an action type and some data that we want associated with that action type.
Reducers calculate the new version of state based on the current state and a given Action. 
Everything that changes within your application will be represented by a single JavaScript Object known as the store. The store contains our state for our application.

Q: What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application state is global, and Component state is local. Redux use "stores" to hold  Application state. That means any Component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

Q: Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
A: Redux Thunk is a Middleware, that provides the ability to handle asynchronous operations inside our Action Creators.