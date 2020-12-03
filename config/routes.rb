Rails.application.routes.draw do
  root to: 'pages#object'
  get 'object', to: 'pages#object'
  get 'space', to: 'pages#space'
end
