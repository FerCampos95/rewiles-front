import { Theme } from '@mui/material/styles';
import { merge } from 'lodash';
import Alert from './Alert';
import Button from './Button';
import Input from './Input';
import Paper from './Paper';
import Tooltip from './Tooltip';
// import Dialog from './Dialog';
// import Divider from './Divider';
// import Switch from './Switch';
// import Table from './Table';
/*
import DataGrid from './DataGrid';
import Accordion from './Accordion';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Badge from './Badge';
import Breadcrumbs from './Breadcrumbs';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Container from './Container';
import ControlLabel from './ControlLabel';
import DataGrid from './DataGrid';
import Drawer from './Drawer';
import Fab from './Fab';
import Grid from './Grid';
import IconButton from './IconButton';
import Link from './Link';
import Lists from './Lists';
import LoadingButton from './LoadingButton';
import Menu from './Menu';
import Pagination from './Pagination';
import Badge from './Badge';
import Pickers from './Pickers';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Rating from './Rating';
import SvgIcon from './SvgIcon';
import Popover from './Popover';
import Stepper from './Stepper';
import Pickers from './Pickers';
import Skeleton from './Skeleton';
import Slider from './Slider';
import Snackbar from './Snackbar';
import Stepper from './Stepper';
import SvgIcon from './SvgIcon';
import Switch from './Switch';
import Table from './Table';
import Tabs from './Tabs';
import Timeline from './Timeline';
import ToggleButton from './ToggleButton';
import TreeView from './TreeView';
import Typography from './Typography';
*/

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
	return merge(
		Alert(theme),
		Button(theme),
		Paper(theme),
		Input(theme),
		Tooltip(theme),
		/*
    DataGrid(theme),
    Dialog(theme),
    Divider(theme),
    Select(theme),
    Switch(theme),
    Table(theme), */
		/*
    Accordion(theme),
    Autocomplete(theme),
    Avatar(theme),
    Backdrop(theme),
    Badge(theme),
    Breadcrumbs(theme),
    ButtonGroup(theme),
    Card(theme),
    Checkbox(theme),
    Chip(theme),
    Container(theme),
    ControlLabel(theme),
    DataGrid(theme),
    Drawer(theme),
    Fab(theme),
    Grid(theme),
    IconButton(theme),
    Link(theme),
    Lists(theme),
    LoadingButton(theme)
    Menu(theme),
    Pagination(theme),
    Pickers(theme),
    Popover(theme),
    Progress(theme),
    Radio(theme),
    Rating(theme),
    Skeleton(theme),
    Slider(theme),
    Snackbar(theme),
    Stepper(theme),
    SvgIcon(theme),
    Table(theme),
    Tabs(theme),
    Checkbox(theme),
    Skeleton(theme),
    Timeline(theme),
    ToggleButton(theme),
    TreeView(theme),
    Typography(theme),
    */
	);
}
