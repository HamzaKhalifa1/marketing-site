import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart } from './cartSlice';

interface WishlistState {
  items: any[]; 
}

const initialState: WishlistState = {
  items: [],
};

export const moveAllWishlistToCart = createAsyncThunk(
  'wishlist/moveAllWishlistToCart',
  async (_, { getState, dispatch }) => {
    const { wishlist } = getState() as any; // cast your root state properly here
    wishlist.items.forEach((item: any) => {
      dispatch(addToCart({
        ...item,
        quantity: item.quantity || 1,
      }));
    });
    dispatch(clearWishlist());
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<any>) => {
      const exists = state.items.find(item => item._id === action.payload._id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
