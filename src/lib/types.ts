// Our nav menu structure
export interface RFLink {
  url: string;
  target: "_blank" | "_self";
  title: string;
  children?: RFLink[]
}


// Workflow only
export interface RFAttendee {
  address?: string
  attendeeId?: string
  cityStateZip?: string
  email?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  inPersonAttendee: boolean
  virtualAttendee: boolean
  isRegistered: boolean
}

// The "window" object
declare global {
  interface Window {
    initialState: {
      // Workflow - login
      isAttendeeLoggedIn: boolean
      attendee?: RFAttendee
    }
    // Widget - If someone logs in directly on the widget
    authToken?: string
  }
}
